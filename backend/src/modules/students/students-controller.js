const asyncHandler = require("express-async-handler");
const {
    getAllStudents,
    addNewStudent,
    getStudentDetail,
    setStudentStatus,
    updateStudent,
} = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code
    const { name, className, section, roll } = req.query;
    const students = await getAllStudents({ name, className, section, roll });
    console.log(students);
    res.json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code
    const paylaod = req.body;
    const add = await addNewStudent(paylaod);

    res.json({ add });
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code
    const paylaod = req.body;
    const update = await updateStudent(paylaod);
    res.json({ update });
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code
    const { id } = req.params;
    const detail = await getStudentDetail(id);
    res.json(detail);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code
    const { userId, reviewerId, status } = req.body;
    const studentStatus = await setStudentStatus({
        userId,
        reviewerId,
        status,
    });
    res.json(studentStatus);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
