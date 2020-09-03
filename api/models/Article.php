<?php

namespace api\models;

use yii\db\ActiveRecord;

class Article extends ActiveRecord{

    //id - PKEY 
    //name - Название навлинка
    //route - путь?! опционально или если ссылка на посторонний ресурс 
    //display - disabled/active/none
    //pos - int. Позиция навлинка на навбаре

    public static function tableName(){
        return 'articles';
    }
    public function rules(){
        return [
            [['name','pos'],'required'],
            [['display'],'string']
        ];
    }
}