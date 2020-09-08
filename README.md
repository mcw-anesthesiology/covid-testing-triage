# COVID Test Triage Tool

A straightforward question/answer app intended for determining a COVID testing protocol from a predefined flowchart.
Though can be used for any question-and-answer based flowchart.

Configuration is done via a required `config.yaml` file in the root directory:

```yaml
title: COVID Test Triage Tool
intro: Some descriptive introductory text about this app
questions:
- text: Question text
  prop: question1
  options:
  - value: value1
    text: Option 1
  - value: value2
    text: Option 2
    additionalProps:
      someProp: someVal
results:
- conditions:
    question1: value1
  text: You selected Option 1 for Question 1
  resources:
  - text: Optional reference document
    href: http://www.example.com/document.pdf
- conditions:
    question1: value2
  text: |
	# Some markdown
```

The `conditions` property is optional in both `question` and `result` objects.

Questions are displayed to the user in order such that the first unanswered question with nonexistent or passing `conditions` is displayed next.
Options can specify an `additionalProps` object, which will set the property and value pairs given in addition to the question's `prop`.

If no questions remain, the first result is displayed using the same formula.
You'll likely want to specify a fallback condition-less result at the end of the list unless you're certain you've exhausted all possible `prop`: `value` combinations.

Result and questions support markdown in their `text` property.

What follows is the starting Next.js README.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
