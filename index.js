const express=require('express');
const app=express();
const connectDB=require('./models/DB-Connect');
const Banner=require('./models/banner-schema');
const cors=require('cors');

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/banner',require('./routes/banner'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));