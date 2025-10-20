import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "../components/ProfileDetails";
import ProfileSettings from "../components/ProfileSettings";

export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>

      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
