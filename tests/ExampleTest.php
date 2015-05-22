<?php

use Laracasts\TestDummy\Factory as TestDummy;

class ExampleTest extends TestCase {

	/**
	 * A basic functional test example.
	 *
	 * @return void
	 */
	public function testBasicExample()
	{
        $this->visit('/');
	}

    public function testLoadPosts()
    {
        TestDummy::create('App\Post', ['title' => 'Some Post']);

        $this->visit('posts')
            ->andSee('Some Post');
    }

    public function testPublishPost()
    {
        // $post = TestDummy::attributesFor('App\Post');

        $this->visit('posts/create')
            ->type('Foo', 'title')
            ->type('The body', 'body')
            ->press('Publish Post')
            ->see('Foo')
            ->onPage('posts')
            ->verifyInDatabase('posts', ['title' => 'Foo']);
    }

}
