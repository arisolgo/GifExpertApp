import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe("Tests in <GifGridItem/>", () => {
  const title = "SetImagesTitle";
  const url = "https://selectedtopic.com/selectedtopic.jpg";

  test("should match with the snapshot", () => {
    const { container } = render(<GifGridItem title="fdf" url="dfd" />);
    expect(container).toMatchSnapshot();
  });

  test("should have the given url as src and title as alt", () => {
    render(<GifGridItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(title).toBe(alt);
  });

  test("should show the title in the component", () => {
    render(<GifGridItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
