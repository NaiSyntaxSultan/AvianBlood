const express = require('express');
const app = express();

PORT = process.env.PORT || 30001;

// ทดสอบลองยิง API ว่าโปรเจครันได้ไหม กับ POSTMAN
app.get('/test', (req,res) => {
    res.json([
        { id: 1, name: "Blue" },
        { id: 2, name: "Red" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server is open by smurf team on port http://localhost:${PORT}`)
});