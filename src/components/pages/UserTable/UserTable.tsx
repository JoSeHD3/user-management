import React from 'react';
import { Input } from '@/components/ui/Input';
import { PLACEHOLDERS } from '@/lib/constants';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';

const sampleUsers = [
  {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
  },
  {
    id: 2,
    name: 'Jane Smith',
    username: 'janesmith',
    email: 'janesmith@example.com',
    phone: '987-654-3210',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    username: 'bobjohnson',
    email: 'bob@example.com',
    phone: '555-555-5555',
  },
];

const UserTable: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4 mb-4">
        <Input
          type="text"
          placeholder={PLACEHOLDERS.NAME}
          onDebouncedChange={(value) => console.log(PLACEHOLDERS.NAME, value)}
        />
        <Input
          type="text"
          placeholder={PLACEHOLDERS.USERNAME}
          onDebouncedChange={(value) =>
            console.log(PLACEHOLDERS.USERNAME, value)
          }
        />
        <Input
          type="email"
          placeholder={PLACEHOLDERS.EMAIL}
          onDebouncedChange={(value) => console.log(PLACEHOLDERS.EMAIL, value)}
        />
        <Input
          type="text"
          placeholder={PLACEHOLDERS.PHONE}
          onDebouncedChange={(value) => console.log(PLACEHOLDERS.PHONE, value)}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="py-2">{user.name}</TableCell>
              <TableCell className="py-2">{user.username}</TableCell>
              <TableCell className="py-2">{user.email}</TableCell>
              <TableCell className="py-2">{user.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
