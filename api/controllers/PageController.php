<?php

namespace api\controllers;

use yii\rest\ActiveController;

class PageController extends ActiveController{
    public $modelClass= 'api\models\Page';

    public function behaviors(){
        return array_merge(parent::behaviors(),[
            'corsFilter'=>[
                'class'=> \yii\filters\Cors::className(),                
            ]
        ]);
    }
}