@extends('app')

@section('content')
    <h1>Posts</h1>

    @foreach ($posts as $post)
        <article>
            <h3>{{ $post->title }}</h3>
        </article>
    @endforeach
@stop
