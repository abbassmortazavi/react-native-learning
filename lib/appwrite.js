import { Client, Account, Avatars } from 'react-native-appwrite';
import React, { useState } from 'react';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject('6af3f9b2001cee62c922') // Your project ID
  .setPlatform('jafar.dev.first'); // Set the platform to React Native

  export const account = new Account(client);
  export const avatars = new Avatars(client);