import cors from 'cors';
import express  from 'express';
import emailRouter from './Routes/emailsend.js'

const app = express();

app.use(cors());
app.use(express.json())
app.use('/email',emailRouter)

const PORT= process.env.PORT || 6498;

app.listen(PORT,console.log(`the node is listen on port ${PORT}`))