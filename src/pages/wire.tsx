import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { WireView } from 'src/sections/wire/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Cables - ${CONFIG.appName}`}</title>
      </Helmet>

      <WireView />
    </>
  );
}
