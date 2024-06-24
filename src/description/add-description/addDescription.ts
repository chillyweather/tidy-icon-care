import { keyboardsObj } from "./data";

export default function addComponenetDescription(
  elements: ComponentNode[] | ComponentSetNode[],
  isStatus: boolean = true,
  status: string = "🟣 To do",
  isMisprint: boolean = true,
  isGuidelines: boolean = true,
  changeDescription: "add" | "replace" = "add",
  hexColor: string
) {
  const statuses = [
    "🟣 To do",
    "🟠 In progress",
    "🔵 Waiting for review",
    "🔴 Stuck",
    "🟢 Completed",
    "⚪️ TBD",
  ];
  elements.map((element) => {
    const nameArray = element.name.split("");
    const newName = nameArray.map((letter: string) => {
      if (keyboardsObj[letter]) {
        return keyboardsObj[letter];
      } else {
        return letter;
      }
    });

    let guideLines = `📝This icon **${element.name}** is used for...\n🎨 #${hexColor}`;
    let misprint = `---------------------------------------------------- misprint: ${newName.join(
      ""
    )}`;

    buildDescription(
      element,
      isStatus,
      status,
      isMisprint,
      isGuidelines,
      changeDescription,
      guideLines,
      misprint
    );
  });

  function buildDescription(
    element: ComponentNode | ComponentSetNode,
    isStatus: boolean,
    status: string,
    isMisprint: boolean,
    isGuidelines: boolean,
    changeDescription: "add" | "replace",
    guideLines: string,
    misprint: string
  ) {
    if (!isMisprint) misprint = "";
    if (!isGuidelines) guideLines = "";
    if (changeDescription === "add") {
      if (element.description && element.description.length) {
        const descriptionArray = element.description.split("\n");

        const currentStatus = descriptionArray.find((string) =>
          statuses.includes(string)
        );
        if (currentStatus && isStatus && status !== "") {
          const index = descriptionArray.indexOf(currentStatus);
          descriptionArray[index] = status;
        } else if (isStatus && status !== "") {
          descriptionArray.unshift(status);
        }

        const currentGuidelines = descriptionArray.find((string) =>
          string.startsWith("📝")
        );
        if (!currentGuidelines && isGuidelines) {
          descriptionArray.push(guideLines);
        }

        const currentMisprint = descriptionArray.find((string) =>
          string.startsWith("-")
        );
        if (currentMisprint) {
          const index = descriptionArray.indexOf(currentMisprint);
          descriptionArray.splice(index, 1);
          descriptionArray.push(currentMisprint);
        } else if (!currentMisprint && isMisprint) {
          descriptionArray.push(misprint);
        }

        element.description = `${descriptionArray.join("\n")}`;
      } else {
        element.description = `${isStatus ? status : ""}

        ${isGuidelines ? guideLines : ""}

        ${isMisprint ? misprint : ""}`;
      }
    } else {
      element.description = `${isStatus ? status : ""}

      ${isGuidelines ? guideLines : ""}

      ${isMisprint ? misprint : ""}`;
    }
  }
}
