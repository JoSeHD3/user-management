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
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setFilter } from '@/lib/users/filtersSlice';
import { fetchUsers } from '@/lib/methods';

const UserTable = () => {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((state) => state.users);
  const filters = useAppSelector((state) => state.filters);

  if (!loading && users.length === 0) {
    dispatch(fetchUsers());
  }

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    dispatch(setFilter({ key, value }));
  };

  const isFilterEmpty = Object.values(filters).every((value) => value === '');

  const filteredUsers = isFilterEmpty
    ? users
    : users.filter((user) =>
        Object.entries(filters).every(([key, value]) =>
          user[key as keyof typeof filters]
            ?.toLowerCase()
            .includes(value.toLowerCase()),
        ),
      );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4 mb-4">
        <Input
          type="text"
          placeholder={PLACEHOLDERS.NAME}
          onDebouncedChange={(value) => handleFilterChange('name', value)}
        />
        <Input
          type="text"
          placeholder={PLACEHOLDERS.USERNAME}
          onDebouncedChange={(value) => handleFilterChange('username', value)}
        />
        <Input
          type="email"
          placeholder={PLACEHOLDERS.EMAIL}
          onDebouncedChange={(value) => handleFilterChange('email', value)}
        />
        <Input
          type="text"
          placeholder={PLACEHOLDERS.PHONE}
          onDebouncedChange={(value) => handleFilterChange('phone', value)}
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
          {filteredUsers.map((user) => (
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
