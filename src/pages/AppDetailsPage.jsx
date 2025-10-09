import { useParams } from "react-router";

export default function AppDetailsPage() {
  const { id } = useParams();
  return <div>id: {id}</div>;
}
