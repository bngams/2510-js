// const db = await JSONFilePreset('db.json', { users: [] })

import { USERS_MOCK } from "../models/user";

export function findAllUsers() {
  // return db.read().then(() => db.data?.users || []);
  // return Promise.resolve([]);

  // For now return mock data
  return Promise.resolve(USERS_MOCK);
  // return USERS_MOCK; 
} 