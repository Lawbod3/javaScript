const student = require('./ObjectTask.js');

test("student name and age", () => {

    expect(student.expression()).toBe("olabode is 23 years old and has a GPA of 3.8");
});
    