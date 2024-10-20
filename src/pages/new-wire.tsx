import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { NewWireView } from 'src/sections/new-wire';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Sign in - ${CONFIG.appName}`}</title>
      </Helmet>

      <NewWireView />
    </>
  );
}