// https://github.com/NaiSyntaxSultan

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { readdirSync } = require('fs');
const app = express();

PORT = process.env.PORT || 30001;


// ใช้ morgan สำหรับ logging
app.use(morgan('dev'));
// ใช้ cors สำหรับจัดการ Cross-Origin Resource Sharing
app.use(cors());
// ใช้ body-parser สำหรับจัดการ request body
app.use(bodyParser.json({ limit: '10mb'}));

// โหลด routes อัตโนมัติจากโฟลเดอร์ routes
readdirSync('./routes')
    .map((r) => app.use('/api', require(`./routes/${r}`)));

app.listen(PORT, () => {
    console.log(`Server is open by NaiSyntaxSultan`)
});