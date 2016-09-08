<?php
namespace Home\Model;

use Think\Model;

class CityTempModel extends Model 
{
  protected $tablePrefix = '';
  protected $tableName = 'citystationviewmodels';
  
  public function getTemp($CityName)
  {
    $CS = M('citytemperature_db.citystationviewmodels', '')->where('city = "'.$CityName.'"')->field('station')->select();
    $CT = M('citytemperature_db.citytempviewmodels', '')->where('station = '.$CS[0][station].'')->field('temperature, time')->select();
    return $CT;
  }
}

?>