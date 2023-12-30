import {isMobile, isTablet} from 'mobile-device-detect';
import {Outlet} from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      {isMobile && isTablet ? (
        <div>
          Kami mendeteksi bahwa kamu mencoba untuk memainkan game ini melalui
          perangkat mobile/table.
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}
