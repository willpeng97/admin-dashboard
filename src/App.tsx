import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { MainLayout } from './components/Layout/MainLayout';
import { QueryTable } from './components/QueryTable';


export default function App() {
  return (
    <Container maxWidth={false}>
        <MainLayout>
          <QueryTable />
        </MainLayout>
    </Container>
  );
}
