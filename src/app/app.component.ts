import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-analyzer-borderhacks2021';
  
  ngAfterViewInit(){
    document.body.style.backgroundColor = "black";
    this.canvasDots();
  }

  canvasDots = function() {
    var canvas = document.querySelector("canvas"),
      ctx = canvas.getContext("2d"),
      colorDot = "#FFFFFF",
      color = "#FFFFFF";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";
    ctx.fillStyle = colorDot;
    ctx.lineWidth = 0.1;
    ctx.strokeStyle = color;
  
    var mousePosition = {
      x: 30 * canvas.width / 100,
      y: 30 * canvas.height / 100
    };
  
    var dots = {
      nb: 600,
      distance: 60,
      d_radius: 1000000,
      array: []
    };
  
    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
  
      this.vx = -0.5 + Math.random();
      this.vy = -0.5 + Math.random();
  
      this.radius = Math.random();
    }
  
    Dot.prototype = {
      create: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      },
  
      animate: function() {
        for (var i = 0; i < dots.nb; i++) {
          var dot = dots.array[i];
  
          if (dot.y < 0 || dot.y > canvas.height) {
            dot.vx = dot.vx;
            dot.vy = -dot.vy;
          } else if (dot.x < 0 || dot.x > canvas.width) {
            dot.vx = -dot.vx;
            dot.vy = dot.vy;
          }
          dot.x += dot.vx;
          dot.y += dot.vy;
        }
      },
  
      line: function() {
        // i_dot = '';
        // j_dot = '';
        
        for (var i = 0; i < dots.nb; i++) {
          for (var j = 0; j < dots.nb; j++) {
            const i_dot = dots.array[i];
            const j_dot = dots.array[j];
  
            if (
              i_dot.x - j_dot.x < dots.distance &&
              i_dot.y - j_dot.y < dots.distance &&
              i_dot.x - j_dot.x > -dots.distance &&
              i_dot.y - j_dot.y > -dots.distance
            ) {
              if (
                i_dot.x - mousePosition.x < dots.d_radius &&
                i_dot.y - mousePosition.y < dots.d_radius &&
                i_dot.x - mousePosition.x > -dots.d_radius &&
                i_dot.y - mousePosition.y > -dots.d_radius
              ) {
                ctx.beginPath();
                ctx.moveTo(i_dot.x, i_dot.y);
                ctx.lineTo(j_dot.x, j_dot.y);
                ctx.stroke();
                ctx.closePath();
              }
            }
          }
        }
      }
    };
  
    function createDots() {
      let dot = null;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot());
        dot = dots.array[i];
  
        dot.create();
      }
  
      dot.line();
      dot.animate();
    }
  
    window.onmousemove = function(parameter) {
      mousePosition.x = parameter.pageX;
      mousePosition.y = parameter.pageY;
    };
  
    mousePosition.x = window.innerWidth / 2;
    mousePosition.y = window.innerHeight / 2;
  
    setInterval(createDots, 1000 / 30);
  };

}
