<?php
namespace App\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\URL;

class CustomResetPassword extends Notification
{
    public $token;

    public function __construct($token)
    {
        $this->token = $token;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        $expiryTime = now()->addMinutes(config('auth.passwords.users.expire'))->format('g:i A T');

        $url = url(route('password.reset', [
            'token' => $this->token,
            'email' => $notifiable->getEmailForPasswordReset(),
        ], false));

        return (new MailMessage)
            ->view('emails.custom-reset-password', [
                'name'     => $notifiable->name,
                'resetUrl' => $url,
                'expiryTime' => now()->addMinutes(config('auth.passwords.users.expire'))->format('g:i A T'),
            ])
            ->subject('Reset Your Password');
    }
}
