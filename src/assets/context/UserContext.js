// Em src/assets/context/UserContext.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  // Efeito para CARREGAR o usuário do AsyncStorage quando o app inicia
  useEffect(() => {
    async function loadUserFromStorage() {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser)); // Se encontrou, define o usuário no estado
        }
      } catch (e) {
        console.error("Failed to load user from storage", e);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }

    loadUserFromStorage();
  }, []); // O array vazio [] faz com que este efeito rode apenas uma vez

  // Efeito para SALVAR o usuário no AsyncStorage sempre que ele mudar
  useEffect(() => {
    async function saveUserToStorage() {
      try {
        if (user) {
          // Salva o objeto do usuário como uma string JSON
          await AsyncStorage.setItem('user', JSON.stringify(user));
        } else {
          // Se o usuário for nulo (logout), remove do armazenamento
          await AsyncStorage.removeItem('user');
        }
      } catch (e) {
        console.error("Failed to save user to storage", e);
      }
    }

    saveUserToStorage();
  }, [user]); // Este efeito roda toda vez que a variável 'user' muda

  // Enquanto estiver carregando os dados, você pode exibir um spinner
  if (loading) {
    return null; // Ou <ActivityIndicator />, etc.
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}