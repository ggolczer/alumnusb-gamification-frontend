/*
=========================================================
* BLK Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
 */
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { NbSpinnerService } from '@nebular/theme';
import Chart from 'chart.js';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'ngx-landingpage',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})

export class LandingPageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  private alive = true;

  constructor(
    private spinner$: NbSpinnerService,
    public authService: AuthService,
  ) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    // To change header dinamically add .add/.remove(bg-*)
    if (window.pageYOffset > 100) {
      const element = document.getElementById('navbar-top');
      if (element) {
        element.classList.remove('navbar-transparent');
      }
    } else {
      const element = document.getElementById('navbar-top');
      if (element) {
        element.classList.add('navbar-transparent');
      }
    }
  }

  ngOnInit() {
    this.spinner$.load();
    this.onWindowScroll(event);
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');

    const canvas: any = document.getElementById('chartBig');
    const ctx = canvas.getContext('2d');
    const gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
    gradientFill.addColorStop(0, 'rgba(228, 76, 196, 0.0)');
    gradientFill.addColorStop(1, 'rgba(228, 76, 196, 0.14)');
    const chartBig = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: [
          'JUN',
          'FEB',
          'MAR',
          'APR',
          'MAY',
          'JUN',
          'JUL',
          'AUG',
          'SEP',
          'OCT',
          'NOV',
          'DEC',
        ],
        datasets: [
          {
            label: 'Data',
            fill: true,
            backgroundColor: gradientFill,
            borderColor: '#e44cc4',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#e44cc4',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#be55ed',
            // pointHoverBorderColor:'rgba(35,46,55,1)',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },

        tooltips: {
          backgroundColor: '#fff',
          titleFontColor: '#ccc',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: 'nearest',
          intersect: 0,
          position: 'nearest',
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(0,0,0,0.0)',
                zeroLineColor: 'transparent',
              },
              ticks: {
                display: false,
                suggestedMin: 0,
                suggestedMax: 350,
                padding: 20,
                fontColor: '#9a9a9a',
              },
            },
          ],

          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(0,0,0,0)',
                zeroLineColor: 'transparent',
              },
              ticks: {
                padding: 20,
                fontColor: '#9a9a9a',
              },
            },
          ],
        },
      },
    });

  }
  ngOnDestroy() {
    this.alive = false;
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
  }
}
