let value = 123;
// let num: String = 123;

type User = {
    name: String,
    age: Number,
    gender?: 'male' | 'female',
}

let bob: User = {
    name: 'Bob',
    age: 22,
    gender: "male",
}

// type lo pl object create
interface Student {
    name: String,
    age: Number,
}

interface Student {
    grade: 'A' | 'B' | 'C' | 'F',
}

let alice: Student = {
    name: 'Alice',
    age: 34,
    grade: 'B',
}

// function hello(user: User, {email: String}) {
function hello(user: User) {
    return `Hello ${user.name}`;
}

function hi(user: {username: String; email: String}) {
    return `Hello ${user.username}`;
}

type Res<T> = {
    data: T;
    code: 200 | 400;
}

type Post = {
    title: String;
}

type Category = {
    name:  String;
}

let post: Res<Post> = {
    data: {
        title: "Post Title",
    },
    code: 200,
}

let category: Res<Category> = {
    data: {
        name: "Cat Name",
    },
    code: 400,
}