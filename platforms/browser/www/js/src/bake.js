
//import ketai.sensors.*;

//KetaiSensor sensor;

	var cursorX, cursorY;
	var light = 0;


  function Target()
  {
    var target = 0;
    var action = 0;
  }

  var trialCount = 5; //this will be set higher for the bakeoff
  var trialIndex = 0;
  var targets = [];

  var startTime = 0; // time starts when the first click is captured
  var finishTime = 0; //records the time of the final click
  var userDone = false;
  var countDownTimerWait = 0;

  function setup() {
    size(600,600); //you can change this to be fullscreen
    frameRate(60);
    //sensor = new KetaiSensor(this);
    //sensor.start();
    //orientation(PORTRAIT);

    rectMode(CENTER);
    textFont(createFont("Arial", 40)); //sets the font to Arial size 20
    textAlign(CENTER);

    for (var i=0;i<trialCount;i++)  //don't change this!
    {
      t = new Target();
      t.target = (_.random(1000))%4;
      t.action = (_.random(1000))%2;
      targets.push(t);
      _.log("created target with " + t.target + "," + t.action);
    }

    // Collections.shuffle(targets);
    targets=_.shuffle(targets);
    // randomize the order of the button;
  }

  function draw() {

    background(80); //background is light grey
    noStroke(); //no stroke

    countDownTimerWait--;

    if (startTime == 0)
      startTime = millis();

    if (trialIndex==targets.length && !userDone)
    {
      userDone=true;
      finishTime = millis();
    }

    if (userDone)
    {
      text("User completed " + trialCount + " trials", width/2, 50);
      text("User took " + nfc((finishTime-startTime)/1000/trialCount,1) + " sec per target", width/2, 150);
      return 1;
    }

    for (var i=0;i<4;i++)
    {
      if(targets[trialIndex].target==i) fill(0,255,0);
			else fill(180,180,180);
      ellipse(300,i*150+100,100,100);
    }

    if (light>20)
      fill(180,0,0);
    else
      fill(255,0,0);
    ellipse(cursorX,cursorY,50,50);
    if(light <100)
      text("Option B " + light , width/3, 80);
    else
      text("Option A " + light , width/3, 80);

    fill(255);//white
    text("Trial " + (trialIndex+1) + " of " +trialCount, width/2, 50);
    text("Target #" + (targets[trialIndex].target)+1, width/2, 100);

    if (targets[trialIndex].action==0)
      text("UP", width/2, 150);
    else
       text("DOWN", width/2, 150);
  }

function onAccelerometerEvent( x,  y,  z)
{
  if (userDone)
    return 1;

  if (light>20) //only update cursor, if light is low
  {
    cursorX = 300+x*40; //cented to window and scaled
    cursorY = 300-y*40; //cented to window and scaled
  }

  t = targets[trialIndex];

  if (light<=20 && _.abs(z-9.8)>4 && countDownTimerWait<0) //possible hit event
  {
	    if (hitTest()==t.target)//check if it is the right target
	    {
	      _.log(z-9.8);
	      if (((z-9.8)>4 && t.action==0) || ((z-9.8)<-4 && t.action==1))
	      {
	        _.log("Right target, right z direction! " + hitTest());
	        trialIndex++; //next trial!
	      }
	      else
	        _.log("right target, wrong z direction!");

	      countDownTimerWait=30; //wait 0.5 sec before allowing next trial
	    }
	    else
	      _.log("Missed target! " + hitTest()); //no recording errors this bakeoff.
  }
}

	function hitTest()
	{
		for (var i=0;i<4;i++){
			if (dist(300,i*150+100,cursorX,cursorY)<100) return i;
	  }
	  return -1;
	}



	function onLightEvent( v) //this just updates the light value
	{
	  light = v;
	}