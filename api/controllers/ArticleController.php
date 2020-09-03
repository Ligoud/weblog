<?php

namespace api\controllers;

use yii\rest\ActiveController;

class ArticleController extends ActiveController{
    public $modelClass= 'api\models\Article';

    public function behaviors(){
        return array_merge(parent::behaviors(),[
            'corsFilter'=>[
                'class'=> \yii\filters\Cors::className(),
                'cors'=>[
                    'Origin'=>['http://localhost:3000'],
                    'Access-Control-Request-Method' => ['GET','POST', 'DELETE', 'PUT'],
                    'Access-Control-Allow-Headers'=> ['*'],
                    'Access-Control-Allow-Credentials' => true,
                    
                    'Access-Control-Max-Age' => 3600,
                    
                    'Access-Control-Expose-Headers' => ['X-Pagination-Current-Page'],
                    
                ]
            ]
        ]);
    }

}