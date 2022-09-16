import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Tests in <GifGrid/>", () => {
  const category = "DBZ";
  test("should show loading initially", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });
  test("Should show items when useFetchGifs is called", () => {
    const gifs = [
      {
        id: "ABC",
        title: "DBZ",
        url: "https://fakeurl/random.jpg",
      },
      {
        id: "123",
        title: "OP",
        url: "https://fakeurl/random.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
