#!/bin/bash
k6 run k6/stress.js --vus 10 --duration 10s
