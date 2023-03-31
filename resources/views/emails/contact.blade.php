@component('mail::message')
<h1>Tiny Teeth Mail</h1>
@component('mail::panel')
    Message from {{$name}}
@endcomponent

<br>
<p>{{$body}}</p>

<br>
<p>Contact the Client by Telephone Number {{$phone}} or by Email {{$email}}.
</p>

@component('mail::button', [ 'url' => 'https://impotractor.com/' ])
    Tiny Teeth General Denistry.
@endcomponent
<hr>
<p>The place where you can have a beautiful and healthy smile!</p>
@endcomponent
