// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  { title: 'Klienci', path: '#', icon: getIcon('eva:people-fill')},
  { title: 'Placówki', path: '#', icon: getIcon('eva:people-fill')},
  { title: 'Urządzenia', path: '#', icon: getIcon('eva:people-fill')},
  {
    title: 'Użytkownicy',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  { title: 'Upload plików', path: '#', icon: getIcon('eva:people-fill')},
  { title: 'Inne dokumenty', path: '#', icon: getIcon('eva:people-fill')},
  { title: 'Ustawienia', path: '#', icon: getIcon('eva:people-fill')},
];

export default navConfig;
