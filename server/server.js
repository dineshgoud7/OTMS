const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')

const app = express()
app.use(express.json())
app.use(cors())

const uri = "mongodb+srv://otmsdb:admin@otms.qxyafhq.mongodb.net/";

const client = new MongoClient(uri);
client.connect();
const db = client.db("s13");
const col = db.collection("user");

app.post('/insert',(request,response) => {
  response.send('YOUR EXPRESS BACKEND IS CONNECTED TO REACT');
  console.log(request.body)
  col.insertOne(request.body)
  console.log("Documents Inserted");

})

app.post('/login/signin', async function(req, res){
  try
  {
      conn = await client.connect();
      db = conn.db('s13');
      users = db.collection('user');
      data = await users.count(req.body);
      conn.close();
      res.json(data);
  }catch(err)
  {
      res.json(err).status(404);
  }
});

mongoose.connect('mongodb+srv://otmsdb:admin@otms.qxyafhq.mongodb.net/s13', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

app.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/enroll', async (req, res) => {
  const { courseId, courseName } = req.body;

  // Check if courseId and courseName are provided
  if (!courseId || !courseName) {
      return res.status(400).send('Course ID and name are required');
  }

  try {
      // Check if the course is already enrolled
      const existingEnrollment = await col.findOne({ courseId });

      if (existingEnrollment) {
          // Course is already enrolled, so remove it
          await col.deleteOne({ courseId });
          console.log("Course unenrolled successfully");
          res.send('Course unenrolled successfully');
      } else {
          // Course is not enrolled, so enroll it
          const enrollmentData = {
              courseId,
              courseName,
              enrollmentDate: new Date() // You can add additional enrollment data if needed
          };

          // Insert enrollment data into the database
          await col.insertOne(enrollmentData);
          console.log("Course enrolled successfully");
          res.send('Course enrolled successfully');
      }
  } catch (error) {
      console.error("Error enrolling/unenrolling in course:", error);
      res.status(500).send('Error enrolling/unenrolling in course');
  }
});

app.post('/check',async(req,res)=>{
    console.log(req,body)
    var result=await col.findOne({"name":req.body,un})
    if(result!=null){
        if(await password.compare(req.body.pw,result.password)){
            res.send(result);
        }
        else{
            res.send("fail")
        }
    }
    else{
        res.send("fail")
    }
}
)



app.listen(8081)
//localhost:8081
console.log("server started")
