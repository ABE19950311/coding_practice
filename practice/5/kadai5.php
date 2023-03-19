<?php
class Node {
    public $node;
    public $next;
    public function __construct($node,$next) {
        $this->node = $node;
        $this->next = $next;
    }
}

class Linkedlist {
    private $head;
    private $size;

    public function __construct() {
        $this->head=NULL;
        $this->size=0;
    }

    public function insert($data,$index) {
        if($index>0&&$index>$this->size) return;

        switch(true) {
            case $index==0:
                $this->head = new Node($data,$this->head);
                $this->size++;
                break;

            case $index>0:
                $count=0;
                $current = $this->head;
                $node = new Node($data,NULL);
                $previous = NULL;
                while($count<$index) {
                    $count++;
                    $previous = $current;
                    if(isset($current))
                    $current = $current->next;
                }
                // print_r($previous); echo '<br>';
                // print_r($current); echo '<br>';
                $node->next = $current;
                if(isset($previous))
                $previous->next = $node;
                $this->size++;
                break;

            case $index<0:
                $node = new Node($data,NULL);
                $current = $this->head;
                $count = $this->size;
                if(isset($current))
                while($count>1) {
                    $count--;
                    $current = $current->next;
                }
                $current->next = $node;
                $this->size++;
                break;
        }
    }

    public function remove($index) {
        if($index>0&&$index>$this->size) return;

        switch(true) {
            case $index==0:
                if(isset($this->head))
                $this->head = $this->head->next;
                $this->size--;
                break;

            case $index>0:
                $current = $this->head;
                $previous=NULL;
                $count=0;
                if(isset($current))
                while($count<$index) {
                    $count++;
                    $previous = $current;
                    $current = $current->next;
                }
                if(isset($previous))
                $previous->next = $current->next;
                $this->size--;
                break;

            case $index<0:
                $current=$this->head;
                $count=$this->size;
                if(isset($current))
                while($count>1) {
                    $count--;
                    $current=$current->next;
                }
                $current->node = NULL;
                $this->size--;
                break;
        }
    }

    public function view() {
        if(!isset($this->head)) return;
        while($this->head) {
            echo "{$this->head->node}<br>";
            $this->head=$this->head->next;
        }
    }
}

$link = new Linkedlist();
$link->insert(100,0);
$link->insert(200,0);
$link->insert(300,1);
$link->insert(400,1);

$link->view();