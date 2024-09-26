import NavbarComponent from '../NavbarComponent'; // Default export
import { FooterComponent } from '../FooterComponent'; // Named export
import { Outlet } from 'react-router-dom';

export default function Rootlayout() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
        <Outlet /> {/* Renders child route elements */}
        <FooterComponent />
    </>
  );
}
