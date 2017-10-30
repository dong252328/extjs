<?php 
namespace app\menu\controller;
use think\Model;

class Index extends Base
{
 public function _initialize(){
 }
 public function init(){
 	$data = model('Menu')->all();
    var_dump($data);
 }
    
}
?>