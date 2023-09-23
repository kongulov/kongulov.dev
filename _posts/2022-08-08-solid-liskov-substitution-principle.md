---
layout: post
title: L - Liskov Substitution Principle | SOLID
description: Liskov Substitution Principle - Subclasses should be substitutable for their base classes.
keywords: php solid oop coding liskov substitution principle
tags: [php, oop, solid]
---

The Liskov Substitution Principle (LSP) is the third of the five basic principles of object-oriented programming and 
design, formulated by Robert Martin, known as Uncle Bob.
<br><br>
The principle says that
>Subclasses should be substitutable for their base classes.

In simple terms, we can say that the behavior of inherited classes should not contradict the behavior specified by the base class,
that is, the behavior of extended classes must be expected as in the base class.

This implies a ban on manipulating the data of the parent class and overriding the methods of the parent class with a change (but not an extension) of their functionality.
It was a revolutionary approach for its time and still remains one of the most powerful design principles.

First, let's look at an example that violates the LSP principle.
```php
class MediaPlayer
{
    public function playAudio()
    {
        return 'Playing audio...';
    }
    
    public function playVideo()
    {
        return 'Playing video...';
    }
}

class VlcMediaPlayer extends MediaPlayer
{
    public function playAudio()
    {
        return 'Playing audio...';
    }
    
    public function playVideo()
    {
        return 'Playing video...';
    }
}

class WinampMediaPlayer extends MediaPlayer
{
    public function playAudio()
    {
        return 'Playing audio...';
    }
}
```
The LSP principle states that classes should treat base class methods equally.
<br>
And `WinampMediaPlayer` only supports audio playback and is incompatible with video playback, and therefore we will get an error
```php
$vlc = new VlcMediaPlayer();
$vlc->playAudio();
$vlc->playVideo();

$winamp = new WinampMediaPlayer();
$winamp->playAudio();
$winamp->playVideo(); // There will be an error
```

Now consider an example that does not violate the LSP principle
```php
class MediaPlayer
{
    public function playAudio()
    {
        return 'Playing audio...';
    }
}

class VideoMediaPlayer extends MediaPlayer
{
    public function playVideo()
    {
        return 'Playing video...';
    }
}

class VlcMediaPlayer extends VideoMediaPlayer
{

}

class WinampMediaPlayer extends MediaPlayer
{
    public function playAudio()
    {
        return 'Playing audio...';
    }
}
```

Now inherited classes do not violate the behavior of base classes, and therefore the LSP principle is not violated.