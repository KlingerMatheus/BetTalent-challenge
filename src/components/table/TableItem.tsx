import { formatDate, formatPhone } from "../utils";

interface UserProps {
  user?: User;
}

const TableItem = ({ user }: UserProps) => {
  if (!user) return;

  return (
    <tr>
      <td>
        <img width={45} height={45} src={user?.image} alt={user?.name} />
      </td>
      <td>{user?.name}</td>
      <td>{user?.job}</td>
      <td>{formatDate(user?.admission_date)}</td>
      <td>{formatPhone(user.phone)}</td>
    </tr>
  );
};

export default TableItem;
