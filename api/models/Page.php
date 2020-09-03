<?php

namespace api\models;

use yii\db\ActiveRecord;

class Page extends ActiveRecord{

    //id - PKEY  Пейджа. 
    //navid - FKEY, указывающий на элемент Nava
    //mdtext - Содержимое кастомной страницы в markdown разметке
    public static function tableName(){
        return 'page';
    }
    public function rules(){
        return [
            [['id','mdtext'],'required']
        ];
    }
}