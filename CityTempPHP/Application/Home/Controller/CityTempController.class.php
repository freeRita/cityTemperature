<?php
namespace Home\Controller;

use Think\Controller;
use Home\Model\CityTempModel;

class CityTempController extends Controller
{
  public function CityTemp($CityName)
  {
    $CTM = new CityTempModel();
    $cityTemp = $CTM->getTemp($CityName);
    $this->ajaxReturn($cityTemp);
  }
  
  
  public function cityTempAction()
  {
    $this->display();
  }
}

?>