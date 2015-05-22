@extends('app')

@section('content')
    <h1>Create a New Post</h1>

    <form action="/posts" method="POST">
        <input type="text" class="text" name="title">
        <textarea name="body"></textarea>
        <input type="submit" class="text" value="Publish Post">
    </form>
