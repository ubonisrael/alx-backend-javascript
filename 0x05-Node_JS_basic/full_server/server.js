import Express from 'express';
import mapRoutes from './routes';

const app = Express();

mapRoutes(app);

app.listen(1245);

export default app;
