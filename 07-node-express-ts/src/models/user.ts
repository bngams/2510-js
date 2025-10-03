export type User = {
  firstname: string;
  lastname: string;
  email: string;
}

export const USERS_MOCK: User[] = [
  { firstname: "Alice", lastname: "Smith", email: "alice.smith@example.com" },
  { firstname: "Bob", lastname: "Johnson", email: "bob.johnson@example.com" },
  { firstname: "Charlie", lastname: "Brown", email: "charlie.brown@example.com" },
];