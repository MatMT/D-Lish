<?php

use App\Models\OrderDish;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\CafeteriaController;
use App\Http\Controllers\OwnerController;
use App\Http\Controllers\PedidoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Peticiones protegidas
Route::middleware('auth:sanctum')->group(function () {
    Route::get('user', function (Request $request) {
        return $request->user();
    });

    // DESLOGUEO ================
    Route::post('/logout', [AuthController::class, 'logout']);

    // OWNER ================
    Route::get('/owner/{id}', [OwnerController::class, 'index']);
    Route::get('/owner/{id}/pedidos', [OwnerController::class, 'pedidos']);

    // ORDENES  ===================
    Route::apiResource('/orden', OrderController::class);

    // SUBIDA DE IMAGEN ==============
    Route::post('/user/{id}/upload-image', [ImageController::class, 'store']);
});

// AUTENTICACIÓN ================ 
Route::post('/registro', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// CONTENIDO CAFETERIA ==========
Route::apiResource('/cafeterias', CafeteriaController::class);
