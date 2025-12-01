# Workflow Usage Documentation

This document provides guidance on how to utilize the reusable CI workflows defined in this project. These workflows are designed to be flexible and can be adapted for various projects, ensuring a consistent and efficient CI/CD process.

## Overview of Reusable Workflows

The project includes three main reusable workflows:

1. **Reusable Build Workflow**: Defined in `.github/workflows/reusable-build.yml`, this workflow is responsible for building your application. It includes all necessary steps to compile and prepare your code for deployment.

2. **Reusable Test Workflow**: Located in `.github/workflows/reusable-test.yml`, this workflow handles the testing of your application. It runs all defined tests to ensure code quality and functionality.

3. **Reusable Deploy Workflow**: Found in `.github/workflows/reusable-deploy.yml`, this workflow manages the deployment of your application to the desired environment. It outlines the steps required to successfully deploy your built application.

## How to Use the Workflows

To use these reusable workflows in your own GitHub Actions, follow these steps:

1. **Create a New Workflow File**: In your project repository, create a new workflow file under `.github/workflows/`. For example, you can create a file named `use-reusable-workflow.yml`.

2. **Reference the Reusable Workflows**: In your new workflow file, you can reference the reusable workflows as follows:

   ```yaml
   name: CI Workflow

   on:
     push:
       branches:
         - main

   jobs:
     build:
       uses: <your-github-username>/reusable-ci-workflows/.github/workflows/reusable-build.yml@main

     test:
       uses: <your-github-username>/reusable-ci-workflows/.github/workflows/reusable-test.yml@main

     deploy:
       uses: <your-github-username>/reusable-ci-workflows/.github/workflows/reusable-deploy.yml@main
   ```

   Replace `<your-github-username>` with your actual GitHub username.

3. **Customize Inputs**: If the reusable workflows require any inputs, you can specify them in your workflow file. Refer to the individual workflow files for details on available inputs.

4. **Commit and Push**: After setting up your workflow file, commit your changes and push them to your repository. The workflows will trigger based on the defined events (e.g., on push to the main branch).

## Example Usage

An example of a complete workflow file using the reusable workflows is provided in the `templates/sample-project/.github/workflows/use-reusable-workflow.yml` file. You can use this as a reference to set up your own workflows.

## Conclusion

By utilizing these reusable CI workflows, you can streamline your development process and ensure consistency across multiple projects. Feel free to customize the workflows to fit your specific needs and requirements. For further details, refer to the individual workflow files and the documentation provided in the `docs/how-to-use.md` file.