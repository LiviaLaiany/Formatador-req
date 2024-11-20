<?php

namespace App\Http\Controllers;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class GoogleController extends Controller
{
    
    public function redirectToGoogle() { 
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback() {

        try { //esse stateless é pra não criar sessão de autenticação e aí parece que é útil pra quando for fazer a API
            $usuarioGoogle = Socialite::driver('google')->user();

            //ve se a conta do google que o usuário botou já existe no sistema
            $usuarioSistema = User::where('email', $usuarioGoogle->getEmail())->first();

            if(!$usuarioSistema) {
                $usuarioSistema = User::create([
                    'name' => $usuarioGoogle->getName(),
                    'email' => $usuarioGoogle->getEmail(),
                    'password' => bcrypt(Str::random(16)), //senha aleatória, já que o usuário deve acessar sua conta através do google sempre
                    'google_id' => $usuarioGoogle->getId(),
                ]);
            }

            Auth::login($usuarioSistema);

            return redirect('/dashboard');
        } catch(\Exception $e) {
            return redirect('/login')->withErrors(['msg' => $e->getMessage()]);
        }

    }


}
