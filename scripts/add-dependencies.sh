#!/bin/bash

# Set default values for options
dev=0
scope=""

# Parse command line arguments
while [[ $# -gt 0 ]]
do
  key="$1"
  case $key in
    --dev)
      dev=1
      shift # past argument
      ;;
    --no-dev)
      dev=0
      shift # past argument
      ;;
    --scope)
      scope="$2"
      shift # past argument
      shift # past value
      ;;
    *)
      dependencies+=("$1") # save unknown option
      shift # past argument
      ;;
  esac
done

# Iterate over the list of dependencies
for dependency in "${dependencies[@]}"
do
  # Build the lerna add command
  cmd="lerna add $dependency"
  if [ $dev -eq 1 ]; then
    cmd+=" --dev"
  fi
  if [ -n "$scope" ]; then
    cmd+=" --scope $scope"
  fi

  # Run the lerna add command for each dependency
  eval "$cmd"
done