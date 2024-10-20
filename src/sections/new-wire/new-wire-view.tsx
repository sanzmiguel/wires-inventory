import { useCallback } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useRouter } from 'src/routes/hooks';

import { DashboardContent } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export function NewWireView() {
  const router = useRouter();

  const create = useCallback(() => {
    router.push('/');
  }, [router]);

  const renderForm = (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <TextField
        fullWidth
        name="name"
        label="Item"
        type="text"
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        name="model"
        label="Modelo"
        InputLabelProps={{ shrink: true }}
        type="text"
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        name="type"
        label="Tipo"
        InputLabelProps={{ shrink: true }}
        type="text"
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        name="length"
        label="Longitud"
        InputLabelProps={{ shrink: true }}
        type="text"
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        name="quantity"
        label="Cantidad"
        InputLabelProps={{ shrink: true }}
        type="number"
        sx={{ mb: 3 }}
      />

<TextField
        fullWidth
        name="comments"
        label="Comentarios"
        InputLabelProps={{ shrink: true }}
        type="text"
        multiline
        rows={4}
        sx={{ mb: 3 }}
      />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        color="inherit"
        variant="contained"
        onClick={create}
      >
        Añadir cable
      </LoadingButton>
    </Box>
  );

  return (
    <DashboardContent>
      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h5">Nuevo cable</Typography>
      </Box>
      {renderForm}
    </DashboardContent>
  );
}
