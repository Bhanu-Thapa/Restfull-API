const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

require('./db/conn');
const Student = require('./models/students');
const studentRouter = require('./routers/student');

app.use(express.json());

// 3 need to register out router
app.use(studentRouter);

app.listen(port, () => {
  console.log(`listening in port ${port}`);
});

//////////////////////////// create a new students ///////////////////////////////

// app.post('/students', (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

// app.post('/students', async (req, res) => {
//   try {
//     const user = new Student(req.body);
//     const createUser = await user.save();
//     res.status(201).send(createUser);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

//////////////////// read the data of registered Students ////////////////////////

// app.get('/students', async (req, res) => {
//   try {
//     const studentsData = await Student.find();
//     res.status(200).send(studentsData);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

//////////////////////// get the individual Student Data using ID //////////////////////////

// app.get('/students/:id', async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const studentData = await Student.findById(_id);

//     if (!studentData) {
//       return res.status(404).send();
//     } else {
//       res.send(studentData);
//     }
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// app.get('/students/:name', async (req, res) => {
//   try {
//     const name = req.params.name;
//     const studentData = await Student.find({ name: name });
//     res.send(studentData);
//   } catch (e) {
//     console.log(e);
//   }
// });

////////////////////////// update the students by it id /////////////////////////////

// app.patch('/students/:id', async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
//       new: true,
//     });
//     res.send(updateStudents);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

////////////////////////// Delete the students by it id /////////////////////////////

// app.delete('/students/:id', async (req, res) => {
//   try {
//     const deleteStudent = await Student.findByIdAndDelete(req.params.id);
//     if (!req.params.id) {
//       return res.status(400).send();
//     }
//     res.send(deleteStudent);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });
