import { formatPhone } from "../utils";

interface UserProps {
  user?: User;
}

const TableItem = ({ user }: UserProps) => {
  if (!user) return;

  return (
    <tr>
      <td>
        <img src={user?.photo} alt={user?.name} />
      </td>
      <td>{user?.name}</td>
      <td>{user?.role}</td>
      <td>{user?.startDate}</td>
      <td>{formatPhone(user.phone)}</td>
    </tr>
  );
};

export default TableItem;
